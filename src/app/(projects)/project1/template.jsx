'use client'
import React from 'react'
import {motion} from 'framer-motion'

function template({children}) {
  return (
    <motion.div
    initial={{y:20,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{ease:'easeIn', duration:2}}
    >{children}</motion.div>
  )
}

export default template