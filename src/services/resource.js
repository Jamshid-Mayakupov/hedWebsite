import { computed, readonly, ref } from 'vue'
import { getErrorMessage, isRequestCanceled } from '@/utils/errors'

export function createListResource(fetcher) {
  const data = ref([])
  const loading = ref(false)
  const error = ref('')
  const rawError = ref(null)
  let activeController = null

  async function load() {
    activeController?.abort()
    const controller = new AbortController()
    activeController = controller
    loading.value = true
    error.value = ''
    rawError.value = null

    try {
      const result = await fetcher({ signal: controller.signal })
      if (!controller.signal.aborted) data.value = result
      return result
    } catch (requestError) {
      if (!isRequestCanceled(requestError)) {
        rawError.value = requestError
        error.value = getErrorMessage(requestError)
      }
      return null
    } finally {
      if (activeController === controller) {
        activeController = null
        loading.value = false
      }
    }
  }

  function cancel() {
    activeController?.abort()
    activeController = null
    loading.value = false
  }

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    rawError: readonly(rawError),
    empty: computed(() => !loading.value && !error.value && data.value.length === 0),
    load,
    retry: load,
    cancel,
  }
}
