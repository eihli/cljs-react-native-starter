(ns example.core
  (:require ["react-native" :as rn]
            ["react" :as react]
            ["react-navigation" :as react-navigation]
            ["react-navigation-stack" :as react-navigation-stack]
            ["react-navigation-tabs" :as react-navigation-tabs]
            [reagent.core :as reagent]
            [devtools.core :as devtools]
            [re-frame.core :as rf]))

;; This gives us some pretty-printing in the dev console thanks to
;; the binaryage/devtools library. (Only works for Chrome devtools at
;; the moment.) Ideally this would be in a namespace that is only
;; used for development and it would be somewhere with the initialization
;; code.
(devtools/install!)

;; Save off some references to some library functions for convenience later.
;; Note that `(.createAppContainer react-navigation)` will
;; invoke the `createAppContainer` function from the `react-navigation` object.
;; `(.-createAppContainer react-navigation)`, with the `.-` before it,
;; will just refer to the function without invoking it.
(def create-app-container
  (.-createAppContainer react-navigation))
(def create-bottom-tab-navigator
  (.-createBottomTabNavigator react-navigation-tabs))
(def create-stack-navigator
  (.-createStackNavigator react-navigation-stack))


;; The next line is a key to having a pleasant hot-reload dev experience.
;; Anything that isn't `defonce`ed will get re-initialized when
;; the code is hot-reloaded. So if you want state to persist, if you
;; messed around in the REPL or clicked around in the app and
;; you want to test changing just one small thing and you don't
;; want to have to go through the process of clicking around in your app
;; or evaluating a bunch of code to get back to the state that you are in,
;; then it's important to keep that state in a `defonce` atom like this.
;;
;; This is also a reason to not keep state in a React components `props`.
;; Components get re-rendered on hot-reload, so any state that's kept
;; in the component will get lost.
;;
;; This would be a major problem for state that is managed by 3rd parties,
;; like the state of navigation in the ReactNavigation library.
;; Luckily, ReactNavigation gives us some ways to persist and restore state
;; which we'll look at further down.
;; https://reactnavigation.org/docs/en/state-persistence.html
(defonce appstate (reagent/atom {:counter 0}))


;; Typically, React apps are navigated by accessing `props.navigation.navigate`.
;; But since we're managing navigation through `re-frame` events, we
;; won't have access to components `props`.
;;
;; Therefore, we get a reference to the object and store it in an
;; atom so we can access it from anywhere.
;; https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
;; Ideally, this would be in a `navigation`-related namespace with
;; other navigation-related code.
(def navigator-ref (atom nil))

(def navigation-actions
  (.-NavigationActions react-navigation))

(defn navigate [routeName, params]
  (.dispatch @navigator-ref
             (.navigate
              navigation-actions
              #js {:routeName routeName
                   :params params})))

(defn child
  []
  ;; `reagent/cursor` is kind of like an atom,
  ;; but it's a reference to a value nested somewhere
  ;; deep inside an atom.
  ;;
  ;; http://reagent-project.github.io/docs/master/ManagingState.html
  ;;
  ;; Reagent keeps track of which views dereference its
  ;; atoms so that when one of them changes it knows to
  ;; re-render that view.
  ;;
  ;; Note that the `appstate` atom was created with
  ;; `reagent/atom` and not the built-in `atom`.
  (let [counter (reagent/cursor appstate [:counter])]
    [:> rn/View
     [:> rn/Text
      {:on-press (fn [] (print @counter) (swap! counter inc))}
      "Counter: " @counter ". Click to increase."]
     [:> rn/Text
      "Change this code, save the file"
      ", and see hot-reloading in action."
      " You won't lose the state of the counter!"]]))

(defn home
  ;; The home screen. We'll show a button on the home tab to get here.
  []
  [:> rn/View
   [:> rn/Text "Hello world!"]
   [child]])

(defn settings
  ;; Another screen that we'll show a button for on the bottom tab.
  []
  [:> rn/View
   [:> rn/Text "Settings Tab"]
   [:> rn/Text
    {:on-press #(navigate (clj->js :settings/new-item) {})}
    "New item"] 
   [:> rn/Text
    {:on-press #(navigate (clj->js :settings/edit-item) {})}
    "Edit item"]])

(defn new-item
  ;; This will be a "stack" navigation screen nested under
  ;; the settings "tab" navigation.
  []
  [:> rn/View
   [:> rn/Text
    "Create new thing"]])

(defn edit-item
  ;; Another "stack" navigation screen nested under settings "tab' nav.
  []
  [:> rn/View
   [:> rn/Text "Edit existing thing"]])


;; Since ReactNavigation stores its state as component properties,
;; we'll use the functionality they give us for persisting
;; and loading navigation state.
;;
;; https://reactnavigation.org/docs/en/state-persistence.html
(defonce nav-state (atom nil))

(defn persist-navigation-state [state]
  (js/Promise. (fn [resolve]
                 (resolve (reset! nav-state state)))))

(defn load-navigation-state []
  (js/Promise. (fn [resolve]
                 (resolve @nav-state))))


;; Below, you'll see a lot of mucking about with
;; `(goog.object/set "navigationOptions" ...)`
;;
;; navigationOptions needs to be set on the react
;; class as a static method.
;;
;; https://reactnavigation.org/docs/en/headers.html#using-params-in-the-title
;;
;; This is ripe for maybe pulling out into a macro
;; or function.
;;
;; Note that I think there's a reason to use
;; `goog.object/set` here over the builtin `aset`
;; but I'm not sure if that's the case or why.
(def home-stack
  (create-stack-navigator
   (clj->js
    {:home/home (doto (reagent/reactify-component home)
                  (goog.object/set
                   "navigationOptions"
                   #js {:title "Home"}))})))

(def settings-stack
  (create-stack-navigator
   (clj->js
    {:settings/home (doto (reagent/reactify-component settings)
                      (goog.object/set
                       "navigationOptions"
                       #js {:title "Settings"}))
     :settings/new-item (doto (reagent/reactify-component new-item)
                          (goog.object/set
                           "navigationOptions"
                           #js {:title "New item"}))
     :settings/edit-item (doto (reagent/reactify-component edit-item)
                           (goog.object/set
                            "navigationOptions"
                            #js {:title "Edit item"}))})))

(def tab-navigator
  (create-bottom-tab-navigator
   #js {:home
        (doto home-stack
          (goog.object/set "navigationOptions"
                           #js {;; :tabBarOnPress identity
                                :tabBarLabel "Home"}))
        
        :settings
        (doto settings-stack
          (goog.object/set "navigationOptions"
                           #js {;; :tabBarOnPress identity
                                :tabBarLabel "Settings"}))})) 

(defn app-container
  []
  [(reagent/adapt-react-class (create-app-container tab-navigator))
   {:ref (fn [ref] (reset! navigator-ref ref))
    :persistNavigationState persist-navigation-state
    :loadNavigationState load-navigation-state}])

(defn make-reloader [comp]
  (let [comp-ref (reagent/atom comp)
        wrapper (reagent/create-class
                 {:render
                  (fn []
                    (let [comp @comp-ref]
                      (if (fn? comp) (comp) comp)))})]
    ;; Whatever we register with rn/AppRegistry must exist
    ;; permanently. Since we can't change it, we must treat it
    ;; like a wrapper and wrap something that we *can* change.
    ;;
    ;; The `wrapper` component we created above renders whatever
    ;; is in our `comp-ref` atom. We get hot reloading
    ;; by resetting the value in that atom. Since it's a
    ;; reagent/atom, changing it forces a re-render.    
    (rn/AppRegistry.registerComponent "ExampleApp" (fn [] wrapper))
    (fn [comp]
      (reset! comp-ref comp))))

(defonce reload (make-reloader home))

(defn ^:dev/after-load start []
  (reload app-container))

(defn init []
  (start))

