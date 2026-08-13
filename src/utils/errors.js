const STATUS_MESSAGES = {
  400: 'Проверьте введённые данные и повторите попытку.',
  401: 'Сессия истекла. Войдите снова.',
  403: 'У вас нет доступа к этому действию.',
  404: 'Запрошенные данные не найдены.',
  409: 'Эти данные уже существуют или были изменены.',
  413: 'Файл слишком большой.',
  422: 'Некоторые данные заполнены неверно.',
  429: 'Слишком много запросов. Повторите попытку позже.',
}

export function isRequestCanceled(error) {
  return error?.code === 'ERR_CANCELED' || error?.name === 'CanceledError' || error?.name === 'AbortError'
}

export function getErrorMessage(error, fallback = 'Не удалось выполнить запрос. Повторите попытку позже.') {
  if (isRequestCanceled(error)) return 'Запрос отменён.'
  if (error?.code === 'ERR_SERVICE_NOT_CONFIGURED') {
    return 'Сервис временно недоступен. Обратитесь к администратору сайта.'
  }

  const status = error?.response?.status
  if (STATUS_MESSAGES[status]) return STATUS_MESSAGES[status]
  if (!error?.response && error?.request) return 'Нет связи с сервером. Проверьте подключение и повторите попытку.'
  return fallback
}

export function createServiceConfigurationError(serviceName) {
  const error = new Error(`${serviceName} URL is not configured`)
  error.code = 'ERR_SERVICE_NOT_CONFIGURED'
  return error
}
