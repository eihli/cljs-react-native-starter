(ns example.core
  (:require ["react-native" :as rn]
            ["react" :as react]
            [reagent.core :as reagent]))

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
   [:> rn/Text "Hello world!"]
   [child]])

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
  (reload home))

(defn init []
  (start))

