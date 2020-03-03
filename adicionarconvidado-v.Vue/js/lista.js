var app = new Vue ({
    el: '#app',
    data: {
        convidados: [],
        convidadoAtual: {}
    },
    methods: {
        adicionarConvidado() {
            let convidadoCopia = {};
            convidadoCopia.nome = this.convidadoAtual.nome;
            this.convidados.push(convidadoCopia);
            this.limpar;
        },

        limpar() {
            this.convidadoAtual.limpar
        }
    }
})