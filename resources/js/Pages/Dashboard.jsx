import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const projects = [
    {
        projectId: 1,
        projectName: 'Proyecto A',
        code: 'PA-001',
        status: 'Activo',
        startDate: '2023-01-01',
        responsible: 'Juan Pérez'
    },
    {
        projectId: 1,
        projectName: 'Proyecto A',
        code: 'PA-001',
        status: 'Activo',
        startDate: '2023-01-01',
        responsible: 'Juan Pérez'
    },
    {
        projectId: 2,
        projectName: 'Proyecto B',
        code: 'PB-002',
        status: 'En progreso',
        startDate: '2023-02-15',
        responsible: 'María Gómez'
    },
];

const ButtonWithMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={toggleMenu}>
                Open Menu
            </button>
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>
                            Option 1
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>
                            Option 2
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>
                            Option 3
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
const ProjectTable = ({ projects }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Project</th>
                        <th className="border px-4 py-2">Nombre proyecto</th>
                        <th className="border px-4 py-2">Código</th>
                        <th className="border px-4 py-2">Estado</th>
                        <th className="border px-4 py-2">Fecha inicio</th>
                        <th className="border px-4 py-2">Responsable</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="border px-4 py-2">{project.projectId}</td>
                            <td className="border px-4 py-2">{project.projectName}</td>
                            <td className="border px-4 py-2">{project.code}</td>
                            <td className="border px-4 py-2">{project.status}</td>
                            <td className="border px-4 py-2">{project.startDate}</td>
                            <td className="border px-4 py-2">{project.responsible}</td>
                            <td><button>...</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};




export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Listado de proyectos</div>
                   
                        <ProjectTable projects={projects}></ProjectTable>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
