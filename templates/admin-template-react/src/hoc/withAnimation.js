import { motion } from 'framer-motion';

const animations = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

const withAnimation = (Component) => (props) =>
    <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.3,
            ease: 'easeOut'
        }}
    >
        <Component {...props} />
    </motion.div>

export default withAnimation