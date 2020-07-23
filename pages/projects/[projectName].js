// Components: 
import Layout from '../../components/layout'

// Data and services:
import staticInfo from '../../data/staticInfo.json'

export default function Project({ project, params }) {

    console.log(params)
    
    return (
        <Layout>
            <div>
                <p>{project}</p>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = staticInfo.projects.map((project) => `/projects/${project.name}`)
    return {
      paths,
      fallback: false
    }
}

export function getStaticProps({ params }) {
    const { projectName } = params; // file name de página dinámica sustituido en el path ( [projectName.js] )
    const project = projectName;
    return {
      props: {
        project,
        params
      }
    }
}