(ns example.core
  (:require ["react-native" :as rn]
            ["react" :as react]))

(def create-element
  (.-createElement react))

(def MainElement
  (create-element rn/Text nil "Hello world!"))

(defn make-component
  ([display-name m] (make-component display-name nil m))
  ([display-name construct m]
   (let [cmp (fn [props context updater]
               (this-as this
                 (.call react/Component this props context updater)
                 (when construct
                   (construct this))
                 this))]
     (goog.object/extend (.-prototype cmp) (.-prototype react/Component) m)

     (when display-name
       (set! (.-displayName cmp) display-name))
     (set! (.. cmp -prototype -constructor) cmp))))

(def my-component
  (make-component
   "MyComponent"
   (fn [this] (set! (.-state this) #js{:counter 0}))
   #js{:render
       (fn []
         MainElement)}))

(defn init []
  (rn/AppRegistry.registerComponent "ExampleApp" (fn [] my-component)))

