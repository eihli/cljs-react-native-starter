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
  (let [comp-ref (atom comp)
        wrapper-ref (atom nil)
        wrapper (reagent/create-class
                 {:render
                  (fn []
                    (let [comp @comp-ref]
                      (if (fn? comp) (comp) comp)))
                  
                  :component-did-mount
                  (fn []
                    (this-as this
                      (reset! wrapper-ref this)))})]
    ;; Whatever we register with rn/AppRegistry must exist
    ;; permanently. Since we can't change it, we must treat it
    ;; like a wrapper and wrap something that we *can* change.
    ;;
    ;; The `wrapper` component we created above renders whatever
    ;; is in our `comp-ref` atom. We get hot reloading
    ;; by resetting the value in that atom and forcing
    ;; a re-render with `forceUpdate`.
    (rn/AppRegistry.registerComponent "ExampleApp" (fn [] wrapper))
    (fn [comp]
      (when-let [wrapper @wrapper-ref]
        ;; Why do we need to reset the component here?
        ;; Why doesn't calling forceUpdate on the parent-most component
        ;; cause everything to re-render?
        ;; Is there a downside to doing it this way? Is there an alternative?
        (reset! comp-ref comp)
        (.forceUpdate @wrapper-ref)))))

(defonce reload (make-reloader home))

(defn ^:dev/after-load start []
  (reload home))

(defn init []
  (start))

