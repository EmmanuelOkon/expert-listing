import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function NotFound() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-screen flex flex-col items-center justify-center gap-3 bg-page "
      >
        <img
          src="/assets/logo/logoRowBlackNew.png"
          alt="app-logo"
          className={`w-30 h-auto`}
          width={500}
          height={500}
        />

        <div className="flex justify-center flex-col items-center space-y-4  ">
          <h2 className="font-bold text-3xl text-black">Hello Explorer!</h2>
          <p className="text-center ">
            This page does not exist on Expert Listing&apos;s Planet
          </p>

          <Button
            onClick={() => window.history.back()}
            className="bg-primary-gold text-white gap-4 text-[16px] group-hover:translate-x-1 border border-primary-gold py-[16px] font-medium w[120px] hover:bg-primary-gold/50 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Take me back
          </Button>
        </div>
      </motion.div>
    </>
  )
}
