import PropTypes from 'prop-types';
import { Section } from './Section.styled';

function SectionComponent({ children }) {
  return <Section>{children}</Section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default SectionComponent;
