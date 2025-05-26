import Project from '../../components/Project'
import Img from '../../assets/images/InvoiceGenerator.jpg'

const InvoiceGenerator = () => {
  return (
    <Project title="Invoice Generator" role="Full Stack Developer" year="2025" image={Img} link="https://invoice.alkyle.dev/">
        Created an invoice generator application that allows users to create, manage, and send invoices. The application is built using NextJS and TailwindCSS. The database is manageed using IndexedDB for local storage.
    </Project>
  )
}

export default InvoiceGenerator