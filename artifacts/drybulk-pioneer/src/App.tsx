import { Switch, Route, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import Privacy from '@/pages/Privacy';
import Kvkk from '@/pages/Kvkk';
import CookiePolicy from '@/pages/CookiePolicy';
import Terms from '@/pages/Terms';
import Corporate from '@/pages/Corporate';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function Router() {
  return (
    <Switch>
      <Route path="/"              component={Home} />
      <Route path="/privacy"       component={Privacy} />
      <Route path="/kvkk"          component={Kvkk} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/terms"         component={Terms} />
      <Route path="/corporate"     component={Corporate} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={BASE}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}
