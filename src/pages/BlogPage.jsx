import React from 'react'
import '../App.css'
import HeaderContent from '../components/HeaderContent/HeaderContent'
import BodyContent from '../components/BodyContent/BodyContent'

function BlogPage() {
    return (
        <div>
            <HeaderContent />

            <BodyContent>
                <h3>Blog page</h3>
                <button>Botton</button>
            </BodyContent>

        </div>
    )
}

export default BlogPage