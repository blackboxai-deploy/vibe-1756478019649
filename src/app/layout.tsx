import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Professional portfolio showcasing web development skills and projects',
  keywords: 'web developer, portfolio, HTML, CSS, JavaScript, Bootstrap',
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    description: 'Professional portfolio showcasing web development skills and projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        {/* Custom JS */}
        <script src="/js/script.js"></script>
      </body>
    </html>
  )
}