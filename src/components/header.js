import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div class="flex justify-center pb-8">
            <Link to="/">
                <h1 className="font-header text-3xl">Good</h1>
            </Link>
        </div>
    )
}

export default Header