
import Accordion from '../components/Accordion';
import '../style/output.css';
function AccordionPage() {
  
  const items = [
    {
      id: '123',
      label: 'Can I use React on a project?',
      content: 'You can user React on anyb project you want.You can user React on anyb project you want.You can user React on anyb project you want.'
    },
    {
      id: '124',
      label: 'Can I use HTML on a project?',
      content: 'You can user React on anyb project you want.You can user React on anyb project you want.You can user React on anyb project you want.'
    },
    {
      id: '125',
      label: 'Can I use CSS on a project?',
      content: 'You can user React on anyb project you want.You can user React on anyb project you want.You can user React on anyb project you want.'
    },
  ]

  return (
    <Accordion items = { items } />
  )
}

export default AccordionPage;
