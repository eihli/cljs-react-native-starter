(ns example.core
  (:require ["react-native" :as rn]
            ["react" :as react]
            ["react-navigation" :as react-navigation]
            ["react-navigation-stack" :as react-navigation-stack]
            ["react-navigation-tabs" :as react-navigation-tabs]
            [reagent.core :as reagent]
            [devtools.core :as devtools]))

(devtools/install!)


(def create-app-container
  (.-createAppContainer react-navigation))
(def create-bottom-tab-navigator
  (.-createBottomTabNavigator react-navigation-tabs))
(def create-stack-navigator
  (.-createStackNavigator react-navigation-stack))
(def initial-app-state {:counter 0})

(defonce appstate (reagent/atom initial-app-state))

(defn child
  []
  (let [counter (reagent/cursor appstate [:counter])]
    [:> rn/Text
     {:on-press (fn [] (print @counter) (swap! counter inc))}
     "Counter: " @counter]))

(defn home
  []
  [:> rn/View
   [:> rn/Text "Hello worlds!"]
   [child]])

(defn tab-1
  []
  [:> rn/View
   [:> rn/Text "This is a tab"]])

(def tab-navigator
  (create-bottom-tab-navigator
   #js {:home (let [home (reagent/reactify-component home)]
                ;; navigationOptions needs to be set on the react
                ;; class as a static method. That's why we
                ;; reactify it in the let above and use this
                ;; doto with goog.object/set to give home that
                ;; property.
                ;;
                ;; The reason for all of this is that we want
                ;; to override the default behavior of the
                ;; tab bar click handler. By default, it updates
                ;; the state of components, it sets state in some props
                ;; that handles displaying different screens.
                ;;
                ;; In re-frame fashion, we want all state to be handled
                ;; in events and stored in the app-db. This way,
                ;; while we're editing and hot-reloading stuff, we
                ;; don't lose the state that we're in. If we're working
                ;; on a screen that's nested deep down in our route,
                ;; we don't want a hot-reload to bump us back up to the
                ;; home screen, which is what would happen if
                ;; state was stored in the props of components.
                (doto home
                  (goog.object/set "navigationOptions"
                                   #js {:tabBarOnPress identity})))
        :tab-1 (reagent/reactify-component tab-1)}))

(def app-container
  (fn []
    [(reagent/adapt-react-class (create-app-container tab-navigator))]))

(defn make-reloader [comp]
  (let [comp-ref (reagent/atom comp)
        wrapper (reagent/create-class
                 {:render
                  (fn []
                    (let [comp @comp-ref]
                      (if (fn? comp) (comp) comp)))})]
    (rn/AppRegistry.registerComponent "ExampleApp" (fn [] wrapper))
    (fn [comp]
      (reset! comp-ref comp))))

(defonce reload (make-reloader home))

(defn ^:dev/after-load start []
  (reload app-container))

(defn init []
  (start))

