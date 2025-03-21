import type { Ref } from "vue"
import { onBeforeUnmount, unref, watch } from "vue"

const noop = () => {}

export function useIntersectionObserver(
  target: Ref<HTMLElement | null>,
  callback: IntersectionObserverCallback,
) {
  const isSupported = window && "IntersectionObserver" in window
  let cleanup = noop

  const stopWatching = isSupported
    ? watch(
        () => unref(target),
        (el) => {
          cleanup()
          if (!el) {
            return
          }

          const observer = new window.IntersectionObserver(callback)
          observer.observe(el)

          cleanup = () => {
            observer.disconnect()
            cleanup = noop
          }
        },
        { immediate: true, flush: "post" },
      )
    : noop

  const stopObserving = () => {
    cleanup()
    stopWatching()
  }
  onBeforeUnmount(() => stopObserving())

  return { stopObserving }
}
