"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';

  
function SelectLanguage({onUserSelect}) {
    const options=['English','Kannada','Hindi','Telugu','Tamil','Bengali','Malayalam','Gujarati','Marathi','Punjabi','Urdu','Korean','Japanese','Portuguese','Spanish','French','Italian','Romanian','German','Russian']
    const [selectedOption,setSelectedOption]=useState();

    return (
    <div className='mt-7'>
        <h2 className='font-bold text-2xl text-primary'>Language</h2>
        <p className='text-gray-500'>Select The Language of your Video</p>
        <Select onValueChange={(value)=>{
            setSelectedOption(value)
            value!='Custom Language'&&onUserSelect('language',value)
            }}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg">
                <SelectValue placeholder="Content Language" />
            </SelectTrigger>
            <SelectContent>
                {options.map((item,index)=>(
                <SelectItem value={item}>{item}</SelectItem>
                ))}
               
            </SelectContent>
        </Select>

        {selectedOption=='Custom Prompt'&&
            <Textarea className="mt-3 "
            onChange={(e)=>onUserSelect('language',e.target.value)}
            placeholder='Give language on which you want to generate video'/>
        }

    </div>
  )
}

export default SelectLanguage