import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

const SerarchForm = ({query} : {query? : string}) => {


  return (
    <Form action={"/"} scroll = {false} className='search-form'>
        <input 
            name='query'
            defaultValue={query}
            className='search-input'
            placeholder='Search startups'
        />

        <div className='flex gap-3'>
            {query && <SearchFormReset/> }

            <Button type='submit' className='search-btn text-white '>
                <Search className='size-5' />
            </Button>
        </div>





    </Form>
  )
}

export default SerarchForm