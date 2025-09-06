const appContainer = document.getElementById('app-container');

let currentView = 'home';

// Navegação
function navigate(view) {
    currentView = view;
    render();
}

// ================== PÁGINAS PRINCIPAIS ==================

function HomePage() {
    return `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Bem-vindo ao PrimeiroEmprego!</h2>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Sua plataforma para conectar jovens talentos a empresas comprometidas com o primeiro emprego, estágio e vagas de jovem aprendiz.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button data-view="candidato-dashboard" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    <i data-lucide="user" class="inline-block mr-2 w-5 h-5"></i> Sou Candidato
                </button>
                <button data-view="empresa-dashboard" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    <i data-lucide="building" class="inline-block mr-2 w-5 h-5"></i> Sou Empresa
                </button>
            </div>
        </div>
    `;
}

// ================== DASHBOARD CANDIDATO ==================

function CandidatoDashboard() {
    return `
        <h2 class="text-3xl font-bold text-center mb-8">Área do Candidato</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-view="candidato-profile" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="user" class="w-10 h-10 text-blue-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Gerenciar Perfil</h3>
                <p class="text-gray-600">Crie ou atualize suas informações.</p>
            </div>
            <div data-view="job-search" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="search" class="w-10 h-10 text-blue-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Buscar Vagas</h3>
                <p class="text-gray-600">Encontre as melhores oportunidades.</p>
            </div>
            <div data-view="app-status" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="file-text" class="w-10 h-10 text-blue-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Status de Candidaturas</h3>
                <p class="text-gray-600">Acompanhe o andamento das suas aplicações.</p>
            </div>
            <div data-view="resources" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="book" class="w-10 h-10 text-blue-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Recursos</h3>
                <p class="text-gray-600">Acesse materiais para aprimorar suas habilidades.</p>
            </div>
            <div data-view="feedback" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="message-circle" class="w-10 h-10 text-blue-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Fornecer Feedback</h3>
                <p class="text-gray-600">Ajude-nos a melhorar a plataforma.</p>
            </div>
        </div>
    `;
}

// Perfil candidato
function CandidatoProfile() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Gerenciar Perfil</h2>
            <form id="profile-form" class="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Nome completo" class="w-full border rounded-lg p-3" required>
                <input type="email" placeholder="Email" class="w-full border rounded-lg p-3" required>
                <input type="text" placeholder="Telefone" class="w-full border rounded-lg p-3">
                <textarea placeholder="Resumo profissional" class="w-full border rounded-lg p-3"></textarea>
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">Salvar</button>
            </form>
        </div>
    `;
}

// Buscar vagas
function JobSearch() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Buscar Vagas</h2>
            <input type="text" placeholder="Pesquisar vaga..." class="w-full border rounded-lg p-3 mb-6">
            <div class="space-y-4">
                <div class="border p-4 rounded-lg shadow-sm bg-white">
                    <h3 class="font-bold text-lg">Estágio em TI</h3>
                    <p class="text-gray-600">Empresa Tech Solutions - São Paulo/SP</p>
                    <button class="mt-2 bg-green-600 text-white px-4 py-2 rounded">Candidatar-se</button>
                </div>
                <div class="border p-4 rounded-lg shadow-sm bg-white">
                    <h3 class="font-bold text-lg">Auxiliar Administrativo</h3>
                    <p class="text-gray-600">Empresa Office Plus - Rio de Janeiro/RJ</p>
                    <button class="mt-2 bg-green-600 text-white px-4 py-2 rounded">Candidatar-se</button>
                </div>
            </div>
        </div>
    `;
}

// Status candidaturas
function AppStatus() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Status de Candidaturas</h2>
            <ul class="space-y-4">
                <li class="border p-4 rounded-lg shadow-sm bg-white">
                    <h3 class="font-bold">Estágio em TI</h3>
                    <p class="text-gray-600">Status: Em análise</p>
                </li>
                <li class="border p-4 rounded-lg shadow-sm bg-white">
                    <h3 class="font-bold">Auxiliar Administrativo</h3>
                    <p class="text-gray-600">Status: Entrevista agendada</p>
                </li>
            </ul>
        </div>
    `;
}

// Recursos
function Resources() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Recursos</h2>
            <ul class="space-y-4">
                <li class="border p-4 rounded-lg shadow-sm bg-white">📘 Guia de Entrevistas</li>
                <li class="border p-4 rounded-lg shadow-sm bg-white">💻 Curso Gratuito de Programação</li>
                <li class="border p-4 rounded-lg shadow-sm bg-white">📝 Modelos de Currículo</li>
            </ul>
        </div>
    `;
}

// Feedback
function Feedback() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Fornecer Feedback</h2>
            <form id="feedback-form" class="max-w-lg mx-auto space-y-4">
                <textarea name="mensagem" placeholder="Digite seu feedback aqui..."
                    class="w-full border rounded-lg p-3" required></textarea>
                <button type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                    Enviar Feedback
                </button>
            </form>
            <div id="feedback-result" class="mt-4 text-green-600 font-semibold hidden">
                Obrigado pelo seu feedback! 🙌
            </div>
        </div>
    `;
}

// ================== DASHBOARD EMPRESA ==================

function EmpresaDashboard() {
    return `
        <h2 class="text-3xl font-bold text-center mb-8">Área da Empresa</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-view="empresa-register" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="building" class="w-10 h-10 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Gerenciar Cadastro</h3>
                <p class="text-gray-600">Cadastre ou atualize as informações da empresa.</p>
            </div>
            <div data-view="post-job" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="plus-circle" class="w-10 h-10 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Publicar Vaga</h3>
                <p class="text-gray-600">Crie e publique novas oportunidades.</p>
            </div>
            <div data-view="view-candidates" class="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <i data-lucide="users" class="w-10 h-10 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl mb-2">Visualizar Candidatos</h3>
                <p class="text-gray-600">Veja e selecione candidatos.</p>
            </div>
        </div>
    `;
}

// Empresa - Cadastro
function EmpresaRegister() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Gerenciar Cadastro</h2>
            <form class="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Nome da Empresa" class="w-full border rounded-lg p-3" required>
                <input type="email" placeholder="Email corporativo" class="w-full border rounded-lg p-3" required>
                <input type="text" placeholder="Telefone" class="w-full border rounded-lg p-3">
                <textarea placeholder="Descrição da Empresa" class="w-full border rounded-lg p-3"></textarea>
                <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded">Salvar</button>
            </form>
        </div>
    `;
}

// Empresa - Publicar vaga
function PostJob() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Publicar Vaga</h2>
            <form class="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Título da Vaga" class="w-full border rounded-lg p-3" required>
                <input type="text" placeholder="Localização" class="w-full border rounded-lg p-3">
                <textarea placeholder="Descrição da Vaga" class="w-full border rounded-lg p-3"></textarea>
                <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Publicar</button>
            </form>
        </div>
    `;
}

// Empresa - Ver candidatos
function ViewCandidates() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Candidatos</h2>
            <ul class="space-y-4">
                <li class="border p-4 rounded-lg bg-white">
                    <h3 class="font-bold">João Silva</h3>
                    <p>Email: joao@email.com</p>
                    <p>Status: Aguardando análise</p>
                </li>
                <li class="border p-4 rounded-lg bg-white">
                    <h3 class="font-bold">Maria Souza</h3>
                    <p>Email: maria@email.com</p>
                    <p>Status: Entrevista agendada</p>
                </li>
            </ul>
        </div>
    `;
}

// ================== ADMIN (placeholder) ==================
function AdminDashboard() {
    return `<h2 class="text-3xl font-bold text-center mb-6">Área do Administrador</h2>
    <p class="text-center text-gray-600">Funcionalidades do admin em desenvolvimento.</p>`;
}

function AdminDashboard() {
    return `
        <h2 class="text-3xl font-bold text-center mb-8">Painel do Administrador</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-view="admin-vagas" class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <i data-lucide="briefcase" class="w-8 h-8 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl">Ver Vagas</h3>
                <p class="text-gray-600">Todas as vagas publicadas pelas empresas.</p>
            </div>
            <div data-view="admin-usuarios" class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <i data-lucide="users" class="w-8 h-8 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl">Gerenciar Usuários</h3>
                <p class="text-gray-600">Veja todos os candidatos e empresas cadastradas.</p>
            </div>
            <div data-view="admin-relatorios" class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <i data-lucide="bar-chart-2" class="w-8 h-8 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl">Relatórios</h3>
                <p class="text-gray-600">Resumo geral da plataforma.</p>
            </div>
            <div data-view="admin-config" class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <i data-lucide="settings" class="w-8 h-8 text-indigo-600 mb-4"></i>
                <h3 class="font-bold text-xl">Configurações</h3>
                <p class="text-gray-600">Ajustes da plataforma.</p>
            </div>
        </div>
    `;
}

function AdminVagas() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Todas as Vagas</h2>
            <ul class="space-y-4">
                <li class="border p-4 rounded-lg bg-white shadow-sm">
                    <h3 class="font-bold">Estágio em TI</h3>
                    <p class="text-gray-600">Empresa Tech Solutions - São Paulo</p>
                    <p>Status: Ativa</p>
                </li>
                <li class="border p-4 rounded-lg bg-white shadow-sm">
                    <h3 class="font-bold">Auxiliar Administrativo</h3>
                    <p class="text-gray-600">Empresa Office Plus - Rio de Janeiro</p>
                    <p>Status: Ativa</p>
                </li>
            </ul>
        </div>
    `;
}

function AdminUsuarios() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Usuários Cadastrados</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border p-4 rounded-lg bg-white shadow-sm">
                    <h3 class="font-bold">Candidatos</h3>
                    <ul class="list-disc pl-5 text-gray-700">
                        <li>João Silva - joao@email.com</li>
                        <li>Maria Souza - maria@email.com</li>
                    </ul>
                </div>
                <div class="border p-4 rounded-lg bg-white shadow-sm">
                    <h3 class="font-bold">Empresas</h3>
                    <ul class="list-disc pl-5 text-gray-700">
                        <li>Tech Solutions - tech@email.com</li>
                        <li>Office Plus - office@email.com</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function AdminRelatorios() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Relatórios da Plataforma</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div class="bg-white rounded-xl p-6 shadow">
                    <h3 class="text-xl font-bold">👤 Usuários</h3>
                    <p class="text-3xl text-blue-600 mt-2">124</p>
                </div>
                <div class="bg-white rounded-xl p-6 shadow">
                    <h3 class="text-xl font-bold">📄 Vagas</h3>
                    <p class="text-3xl text-green-600 mt-2">32</p>
                </div>
                <div class="bg-white rounded-xl p-6 shadow">
                    <h3 class="text-xl font-bold">✅ Candidaturas</h3>
                    <p class="text-3xl text-indigo-600 mt-2">76</p>
                </div>
            </div>
        </div>
    `;
}

function AdminConfig() {
    return `
        <div>
            <h2 class="text-3xl font-bold text-center mb-6">Configurações da Plataforma</h2>
            <p class="text-center text-gray-600">Funcionalidades administrativas em breve.</p>
        </div>
    `;
}


// ================== RENDER ==================
function render() {
    let content = '';
    switch (currentView) {
        case 'home': content = HomePage(); break;
        case 'candidato-dashboard': content = CandidatoDashboard(); break;
        case 'candidato-profile': content = CandidatoProfile(); break;
        case 'job-search': content = JobSearch(); break;
        case 'app-status': content = AppStatus(); break;
        case 'resources': content = Resources(); break;
        case 'feedback': content = Feedback(); break;
        case 'empresa-dashboard': content = EmpresaDashboard(); break;
        case 'empresa-register': content = EmpresaRegister(); break;
        case 'post-job': content = PostJob(); break;
        case 'view-candidates': content = ViewCandidates(); break;
        case 'admin-dashboard': content = AdminDashboard(); break;
        case 'admin-vagas': content = AdminVagas(); break;
        case 'admin-usuarios': content = AdminUsuarios(); break;
        case 'admin-relatorios': content = AdminRelatorios(); break;
        case 'admin-config': content = AdminConfig(); break;
        default: content = `<p class="text-center text-gray-600">Página não encontrada</p>`;
    }

    appContainer.innerHTML = content;
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', render);

// ================== LISTENERS ==================

// Navigation event delegation
appContainer.addEventListener('click', function(e) {
    // Find closest element with data-view attribute
    let navElem = e.target.closest('[data-view]');
    if (navElem) {
        e.preventDefault();
        navigate(navElem.getAttribute('data-view'));
        return;
    }
});

// Form feedback
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'feedback-form') {
        e.preventDefault();
        document.getElementById('feedback-result').classList.remove("hidden");
        e.target.reset();
    }
});
