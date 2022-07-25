import configRoutes from '@/routes/routes'
import {
  useRoutes,
} from 'react-router-dom';


export default function App() {
  const elements = useRoutes(configRoutes);
  return elements;
}
