export default interface IMessageInfo {
  message: string
  variant: 'success' | 'warning' | 'error' | 'info'
  key: number
}
