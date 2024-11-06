document.addEventListener('DOMContentLoaded', function() {
    var mind = {
        "meta": {
            "name": "recipeMindMap",
            "author": "Chef",
            "version": "1.0"
        },
        "format": "node_array",
        "data": [
            { "id": "root", "isroot": true, "topic": "Recipes" },
            { "id": "huiguorou", "parentid": "root", "topic": "回锅肉" },
            { "id": "huiguorou_history", "parentid": "huiguorou", "topic": "History" },
            { "id": "huiguorou_history_detail", "parentid": "huiguorou_history", "topic": "回锅肉是经典的四川菜。" },
            { "id": "huiguorou_ingredients", "parentid": "huiguorou", "topic": "Ingredients" },
            { "id": "huiguorou_ingredient1", "parentid": "huiguorou_ingredients", "topic": "五花肉: 500克" },
            { "id": "huiguorou_ingredient2", "parentid": "huiguorou_ingredients", "topic": "青椒: 2个" },
            { "id": "huiguorou_ingredient3", "parentid": "huiguorou_ingredients", "topic": "红椒: 1个" },
            { "id": "huiguorou_ingredient4", "parentid": "huiguorou_ingredients", "topic": "蒜苗: 2根" },
            { "id": "huig...

    jsMind.ready(function() {
        var jm = new jsMind(options);
        jm.show(mind);
    });
});
            { "id": "huiguorou_ingredient6", "parentid": "huiguorou_ingredients", "topic": "生姜: 3片" },
            { "id": "huiguorou_ingredient7", "parentid": "huiguorou_ingredients", "topic": "郫县豆瓣酱: 2大勺" },
            { "id": "huiguorou_ingredient8", "parentid": "huiguorou_ingredients", "topic": "生抽: 1大勺" },
            { "id": "huiguorou_ingredient9", "parentid": "huiguorou_ingredients", "topic": "料酒: 1大勺" },
            { "id": "huiguorou_ingredient10", "parentid": "huiguorou_ingredients", "topic": "糖: 1小勺" },
            { "id": "huiguorou_ingredient11", "parentid": "huiguorou_ingredients", "topic": "盐: 适量" },
            { "id": "huiguorou_ingredient12", "parentid": "huiguorou_ingredients", "topic": "食用油: 适量" },
            { "id": "huiguorou_directions", "parentid": "huiguorou", "topic": "Directions" },
            { "id": "huiguorou_step1", "parentid": "huiguorou_directions", "topic": "将五花肉放入沸水中煮20分钟，捞出晾凉后切成薄片。" },
            { "id": "huiguorou_step2", "parentid": "huiguorou_directions", "topic": "青椒、红椒去蒂去籽后切成块，蒜苗切段备用。" },
            { "id": "huiguorou_step3", "parentid": "huiguorou_directions", "topic": "热锅凉油，加入郫县豆瓣酱炒出红油，加入大蒜和生姜片炒香。" },
            { "id": "huiguorou_step4", "parentid": "huiguorou_directions", "topic": "放入切好的五花肉片，翻炒均匀，加入生抽、料酒和糖继续翻炒。" },
            { "id": "huiguorou_step5", "parentid": "huiguorou_directions", "topic": "加入青椒块、红椒块和蒜苗段，翻炒至断生，最后根据口味加入盐调味即可。" }
        ]
    };

    var options = {
        container: 'jsmind_container',
        editable: false,
        theme: 'primary'
    };

    var jm = new jsMind(options);
    jm.show(mind);
});