(ns example.core
  (:require ["react-native" :as rn]
            ["react" :as react]
            ["react-navigation" :as react-navigation]
            ["react-navigation-stack" :as react-navigation-stack]
            ["react-navigation-tabs" :as react-navigation-tabs]
            [reagent.core :as reagent]))

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
   (clj->js {:home (reagent/reactify-component home)
             :tab-1 (reagent/reactify-component tab-1)})))

(def app-container
  (fn []
    [(reagent/adapt-react-class (create-app-container tab-navigator))]))

(defn make-reloader [comp]
  (let [comp-ref (reagent/atom comp)
        wrapper-ref (atom nil)
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

