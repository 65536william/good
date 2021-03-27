import * as React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div className="max-w-6xl mx-auto min-h-screen px-4 py-8 lg:px-8 flex flex-col justify-between">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
