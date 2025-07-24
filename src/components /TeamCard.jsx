import { FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './TeamCard.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

function TeamCard({ team, isVisible, toggleDetails, index }) {
  return (
    <motion.div
      className="card"
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
      <h4>{team.name}</h4>
      <p>{team.summary}</p>
      <FaInfoCircle
        className="info-icon"
        onClick={() => toggleDetails(team.id)}
        title="Show Details"
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="team-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{team.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default TeamCard;
