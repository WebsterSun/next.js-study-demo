import NavBar from '@/components/navBar/NavBar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

//元数据只支持服务端渲染模式，若用 use client 下面代码meatadata则无效
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className='container'>
            <NavBar />
          {children}
          <Footer/>
          </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
