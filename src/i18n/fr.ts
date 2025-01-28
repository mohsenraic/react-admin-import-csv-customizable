export default {
  csv: {
    buttonMain: {
      label: "Importer",
      tooltip: "Fichier '.csv' ou '.tsv' uniquement",
      emptyResource:
        "La propriété 'resource' était vide, avez-vous passé les {... props} à ImportButton ?",
    },
    parsing: {
      collidingIds: 'Champs "id" en collision trouvés',
      failedValidateRow: "CSV n'a pas satisfait aux exigences de validation",
      invalidCsv:
        'Le document n\'a pas pu être analysé en tant que fichier "csv"',
    },
    dialogCommon: {
      subtitle: "Importation de %{count} élément(s) de %{fileName}",
      conflictCount:
        "Plusieurs enregistrements <strong>(%{conflictingCount})</strong>  dans la base de données possèdent les mêmes identifiants. Quelle action souhaitez-vous effectuer ?",
      buttons: {
        cancel: "Annuler",
      },
    },
    dialogImport: {
      alertClose: "Importé %{fname}",
      title: "Importation",
      buttons: {
        replaceAllConflicts: "Écraser et Remplacer les lignes",
        skipAllConflicts: "Ne pas prendre les MàJ",
        letmeDecide: "Laisse-moi décider pour chaque ligne",
      },
    },
    dialogDecide: {
      title: 'Importation de "%{id}"',
      remainingItems:
        "Il reste <strong>(%{conflictingCount})</strong> éléments",
      buttons: {
        replaceRow: 'Écraser et ramplacer "%{id}"',
        addAsNewRow: "Ajouter comme nouvelle ligne (ne pas remplacer)",
        skipDontReplace: "Ne pas mettre à jour",
      },
    },
    loading: "Chargement...",
  },
};
