/* everything that appears when Ding is clicked on the work page (desktop
   and phone): who, where, contact, experiences, services, clients */
const link = (name, title, description) => ({name, title, type: 'url', description,
  validation: (R) => R.uri({allowRelative: false, scheme: ['http', 'https', 'mailto']})})

export default {
  name: 'about',
  title: 'Infos',
  type: 'document',
  fieldsets: [
    {name: 'current', title: 'Poste actuel', options: {columns: 2}},
  ],
  fields: [
    {name: 'name', title: 'Nom', type: 'string', initialValue: 'Thomas Ding'},
    {name: 'location', title: 'Ville', type: 'string', description: 'ex. Paris, France'},
    {name: 'showTime', title: 'Afficher l’heure de Paris à côté', type: 'boolean', initialValue: true},

    {name: 'currentText', title: 'Phrase', type: 'string', fieldset: 'current', description: 'ex. Currently designer at'},
    {name: 'currentPlace', title: 'Studio / entreprise', type: 'string', fieldset: 'current'},
    {...link('currentUrl', 'Lien du studio'), fieldset: 'current'},

    {name: 'email', title: 'Email', type: 'string', description: 'Un clic sur l’adresse la copie.'},
    {name: 'instagram', title: 'Instagram', type: 'string', description: 'Le pseudo, sans @'},
    {
      name: 'links',
      title: 'Autres liens',
      description: 'Optionnel — ex. LinkedIn, Vimeo…',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', title: 'Texte', type: 'string'},
          link('url', 'Lien'),
        ],
        preview: {select: {title: 'label', subtitle: 'url'}},
      }],
    },

    {
      name: 'experiences',
      title: 'Expériences',
      description: 'Dans l’ordre d’affichage (la plus récente en premier). Glisser-déposer pour réordonner.',
      type: 'array',
      of: [{
        type: 'object',
        name: 'experience',
        fields: [
          {name: 'from', title: 'De', type: 'string', description: 'ex. 2025'},
          {name: 'to', title: 'À', type: 'string', description: 'ex. 2026, ou now'},
          {name: 'company', title: 'Entreprise', type: 'string'},
          link('url', 'Lien (optionnel)'),
          {name: 'role', title: 'Poste', type: 'string'},
        ],
        preview: {
          select: {company: 'company', from: 'from', to: 'to', role: 'role'},
          prepare: ({company, from, to, role}) => ({
            title: company || '—',
            subtitle: [[from, to].filter(Boolean).join(' — '), role].filter(Boolean).join(' · '),
          }),
        },
      }],
    },

    {name: 'services', title: 'Services', type: 'string', description: 'ex. Art direction, graphic design, image, video, AI'},

    {
      name: 'clients',
      title: 'Clients',
      description: 'Un nom par ligne, dans l’ordre d’affichage. (Coller une liste séparée par des virgules marche aussi.)',
      type: 'text',
      rows: 14,
    },
  ],
  preview: {prepare: () => ({title: 'Infos'})},
}
