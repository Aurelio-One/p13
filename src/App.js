import Router from './utils/Router/Router'
import { Provider } from 'react-redux'
import store from './state/store'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
