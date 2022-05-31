# Docpress

Tooling de build d'un site static Vuepress@2.0.0-beta.26. Les sources (configuration markdowns) sont externalisés. Le but est de pouvoir mixer plusieurs sources de docs (plusieurs projets qui sont en dépendance). 

Les documentations peuvent être intégrées à des projets git, en tant que sous dossiers. L'url git du projet permettra de récupérer le sous dossier et d'utiliser ses markdowns et sa configuration.

Le site est buildé avec docpress qui récupère une configuration principale et des fichiers markdown qu'il copie dans son système de fichiers.

Docpress intègre une configuration Tauri qui permet de distribuer la documentation dans un format d'application native.


*Difficultés et améliorations*

Les chemins décrits dans les sets de documentation comportent des référence au système de fichier de docpress. Il faut réussir à abstraire cette connaissance et la faire porter par docpress.

Les set de documentation devraient pouvoir définir un styling lorsqu'ils sont chargés en documentation principale.

La création d'un set de documentation répond à certaines conventions qu'il faut automatiser.