

import './globals.css'

export const metadata = {
  title: 'PDF Annotation Tool',
  description: 'A tool to annotate PDFs in the browser.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
