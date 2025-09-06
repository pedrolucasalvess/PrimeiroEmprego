const appContainer = document.getElementById('app-container');

let currentView = 'home';

function navigateTo(view) {
    currentView = view;
    render(); 
}



function HomePage() {
    return `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Bem-vindo ao PrimeiroEmprego!</h2>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Sua plataforma para conectar jovens talentos a empresas comprometidas com o primeiro emprego, estágio e vagas de jovem aprendiz.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button onclick="navigateTo('candidato-dashboard')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    <i data-lucide="user" class="inline-block mr-2 w-5 h-5"></i> Sou Candidato
                </button>
                <button onclick="navigateTo('empresa-dashboard')" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    <i data-lucide="building" class="inline-block mr-2 w-5 h-5"></i> Sou Empresa
                </button>
            </div>
        </div>
    `;
}

function CandidatoDashboard() {
    return `
        <div class="text-center w-full">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Área do Candidato</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${DashboardCard({ icon: 'user', title: 'Gerenciar Perfil', description: 'Crie ou atualize suas informações.', view: 'candidato-profile' })}
                ${DashboardCard({ icon: 'search', title: 'Buscar Vagas', description: 'Encontre as melhores oportunidades.', view: 'job-search' })}
                ${DashboardCard({ icon: 'file-text', title: 'Status de Candidaturas', description: 'Acompanhe o andamento das suas aplicações.', view: 'app-status' })}
                ${DashboardCard({ icon: 'book-open', title: 'Recursos', description: 'Acesse materiais para aprimorar suas habilidades.', view: 'dev-resources' })}
                ${DashboardCard({ icon: 'message-square', title: 'Fornecer Feedback', description: 'Ajude-nos a melhorar a plataforma.', view: 'feedback' })}
            </div>
        </div>
    `;
}

function EmpresaDashboard() {
     return `
        <div class="text-center w-full">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Área da Empresa</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${DashboardCard({ icon: 'building', title: 'Gerenciar Cadastro', description: 'Cadastre ou atualize as informações da empresa.', view: 'empresa-register' })}
                ${DashboardCard({ icon: 'plus-circle', title: 'Publicar Vaga', description: 'Crie e publique novas oportunidades.', view: 'post-job' })}
                ${DashboardCard({ icon: 'users', title: 'Visualizar Candidatos', description: 'Acesse e selecione os candidatos.', view: 'view-candidates' })}
            </div>
        </div>
    `;
}

function AdminDashboard() {
    return `
        <div class="text-center w-full">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Área do Administrador</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${DashboardCard({ icon: 'users', title: 'Gerenciar Usuários', description: 'Aprovar, suspender ou excluir contas.', view: 'admin-manage-users' })}
                ${DashboardCard({ icon: 'briefcase', title: 'Gerenciar Vagas', description: 'Moderar e aprovar a publicação de vagas.', view: 'admin-manage-jobs' })}
                ${DashboardCard({ icon: 'book-open', title: 'Gerenciar Conteúdo', description: 'Adicionar e organizar recursos.', view: 'admin-manage-content' })}
                ${DashboardCard({ icon: 'bar-chart-2', title: 'Gerar Relatórios', description: 'Acompanhar métricas de uso da plataforma.', view: 'admin-reports' })}
                ${DashboardCard({ icon: 'settings', title: 'Gerenciar Integrações', description: 'Configurar integrações com outros sistemas.', view: 'admin-integrations' })}
                ${DashboardCard({ icon: 'message-square', title: 'Fornecer Suporte', description: 'Auxiliar usuários com problemas e dúvidas.', view: 'admin-support' })}
            </div>
        </div>
    `;
}


function UnderConstruction(title) {
    return `
        <div class="text-center">
            <h2 class="text-2xl font-bold mb-6">${title}</h2>
            <p class="text-gray-700">Funcionalidade em desenvolvimento.</p>
            <i data-lucide="construct" class="w-16 h-16 mx-auto mt-4 text-yellow-500"></i>
        </div>
    `;
}

function DashboardCard({ icon, title, description, view }) {
    return `
        <button onclick="navigateTo('${view}')" class="dashboard-card bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer">
            <div class="text-blue-600 mb-4"><i data-lucide="${icon}" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-semibold mb-2">${title}</h3>
            <p class="text-gray-600 text-sm">${description}</p>
        </button>
    `;
}
function render() {
    let content = '';
    switch (currentView) {
        case 'home':
            content = HomePage();
            break;
        case 'candidato-dashboard':
            content = CandidatoDashboard();
            break;
        case 'empresa-dashboard':
            content = EmpresaDashboard();
            break;
        case 'admin-dashboard':
            content = AdminDashboard();
            break;
        default:
            content = UnderConstruction('Página não encontrada');
    }
    
    appContainer.innerHTML = content;
    
    lucide.createIcons();
}
document.addEventListener('DOMContentLoaded', render);