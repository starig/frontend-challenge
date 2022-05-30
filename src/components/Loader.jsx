import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={225}
        height={225}
        viewBox="0 0 225 225"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="225" height="225" />
    </ContentLoader>
)

export default Loader;