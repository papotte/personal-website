import React, {useState} from 'react'

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages)
  }

  const {pdf, width} = props

  return (
    <div className="all-page-container">
    </div>
  )
}
