import { Editor } from '@/components/ui/Editor'
import Header from '@/components/ui/Header'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header >
        <p className='text-white'>Test</p>
      </Header>
      <Editor/>
    </div>
  )
}

export default Document
