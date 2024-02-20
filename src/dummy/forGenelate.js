[
    '{{repeat(15, 25)}}',

{
    _id: '{{integer(55000, 56000)}}',
    info: {
        title: function (tags) {
            var titles = ['Solicitação de Atendimento', 'Criação de Usuário'];
            return titles[tags.integer(0, titles.length - 1)];
        },
        status: function (tags) {
            var statuses = ['Processando', 'Pendente', 'Fechado'];
            return statuses[tags.integer(0, statuses.length - 1)];
        },
        priority: function (tags) {
            var priorities = ['Baixa', 'Média', 'Alta'];
            return priorities[tags.integer(0, priorities.length - 1)];
        },
        clientName: '{{firstName()}} {{surname()}}',
        update: '{{date(new Date(2024, 1, 1), new Date(2024, 4, 26), "YYYY-MM-dd HH:mm")}}',
        creation: '{{date(new Date(2023, 9, 1), new Date(2023, 12, 31), "YYYY-MM-dd HH:mm")}}',
        assignedTech: function (tags) {
            var techs = ['Lorenzo Mogi Yang', 'Thiago Fischborn', 'Schainan Hahn Soares', 'matheus silva ribeiro', 'Rodrigo Lorscheiter'];
            var result = [];
            var count = tags.integer(0, 3);
            for (var i = 0; i < count; i++) {
                var index = tags.integer(0, techs.length - 1);
                result.push(techs[index]);
                techs.splice(index, 1); // 選択した要素を配列から削除
            }
            return result;
        },
        assignedGroup: function (tags) {
            var groups = ['N1', 'N2-Sup', 'N2-Tech', 'Sistemas'];
            return groups[tags.integer(0, groups.length - 1)];
        },
        category: function (tags) {
            var categories = ['Hardware', 'Software', 'Rede', 'Sistemas'];
            return categories[tags.integer(0, categories.length - 1)];
        },
        description: '{{lorem(1, "paragraphs")}}'
    }
}
]