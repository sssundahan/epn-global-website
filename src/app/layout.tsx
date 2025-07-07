
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '../ThemeRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthProvider from '../components/AuthProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EPN Global',
  description: 'The premier network for executives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <Script
          id="mixpanel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split('.');if(b.length==1){a=a[b[0]]=function(){a.push([b[0]].concat(Array.prototype.slice.call(arguments,0)))}}else{a=a[b[0]]=g(a[b[0]]||{},b.slice(1).join('.'))}return a}var c=c||"mixpanel";b[c]=g(b,e);b[c].people=g(b[c],"people");b[c].alias=g(b[c],"alias");b[c].funnel=g(b[c],"funnel");b[c].group=g(b[c],"group");b[c].track_links=g(b[c],"track_links");b[c].track_forms=g(b[c],"track_forms");b[c].register=g(b[c],"register");b[c].register_once=g(b[c],"register_once");b[c].unregister=g(b[c],"unregister");b[c].identify=g(b[c],"identify");b[c].reset=g(b[c],"reset");b[c].disable=g(b[c],"disable");b[c].loaded=function(a){b[c]._i.push(["loaded",!1].concat(Array.prototype.slice.call(arguments,0)))};b[c].push=function(){b[c].push.apply(b[c],arguments)};b[c].add_group=g(b[c],"add_group");b[c].set_group=g(b[c],"set_group");b[c].remove_group=g(b[c],"remove_group");b[c].track_pageview=g(b[c],"track_pageview");b[c].track_with_groups=g(b[c],"track_with_groups");b[c].set_once=g(b[c],"set_once")};b._i.push([e,f,c])}})(document,window.mixpanel||[]);
              mixpanel.init('${process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}', {debug: true});
            `,
          }}
        />
        <AuthProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
