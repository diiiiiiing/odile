/* everything that appears when Ding is clicked on the work page (desktop
   and phone): who, where, contact, experiences, services, clients — each
   category in its own box, with a switch to keep it off the site */
const link = (name, title, description) => ({name, title, type: 'url', description,
  validation: (R) => R.uri({allowRelative: false, scheme: ['http', 'https', 'mailto']})})

/* the "hide" switch of a category; nothing set = shown */
const hide = (name, fieldset) => ({name, fieldset, title: 'Masquer sur le site', type: 'boolean', initialValue: false})

const box = (name, title) => ({name, title, options: {collapsible: true, collapsed: false}})

export default {
  name: 'about',
  title: 'Infos',
  type: 'document',
  fieldsets: [
    box('fsName', 'Nom'),
    box('fsLocation', 'Ville'),
    box('fsCurrent', 'Poste actuel'),
    box('fsEmail', 'Email'),
    box('fsInstagram', 'Instagram'),
    box('fsLinks', 'Autres liens'),
    box('fsExperiences', 'Expériences'),
    box('fsServices', 'Services'),
    box('fsClients', 'Clients'),
  ],
  fields: [
    {name: 'name', title: 'Nom', type: 'string', fieldset: 'fsName', initialValue: 'Thomas Ding'},
    hide('hideName', 'fsName'),

    {name: 'location', title: 'Ville', type: 'string', fieldset: 'fsLocation', description: 'ex. Paris, France'},
    {name: 'showTime', title: 'Afficher l’heure de Paris à côté', type: 'boolean', fieldset: 'fsLocation', initialValue: true},
    hide('hideLocation', 'fsLocation'),

    {name: 'currentText', title: 'Phrase', type: 'string', fieldset: 'fsCurrent', description: 'ex. Currently designer at'},
    {name: 'currentPlace', title: 'Studio / entreprise', type: 'string', fieldset: 'fsCurrent'},
    {...link('currentUrl', 'Lien du studio'), fieldset: 'fsCurrent'},
    hide('hideCurrent', 'fsCurrent'),

    {name: 'email', title: 'Email', type: 'string', fieldset: 'fsEmail', description: 'Un clic sur l’adresse la copie.'},
    hide('hideEmail', 'fsEmail'),

    {name: 'instagram', title: 'Instagram', type: 'string', fieldset: 'fsInstagram', description: 'Le pseudo, sans @'},
    hide('hideInstagram', 'fsInstagram'),

    {
      name: 'links',
      title: 'Autres liens',
      fieldset: 'fsLinks',
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
    hide('hideLinks', 'fsLinks'),

    {
      name: 'experiences',
      title: 'Expériences',
      fieldset: 'fsExperiences',
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
    hide('hideExperiences', 'fsExperiences'),

    {name: 'services', title: 'Services', type: 'string', fieldset: 'fsServices', description: 'ex. Art direction, graphic design, image, video, AI'},
    hide('hideServices', 'fsServices'),

    {
      name: 'clients',
      title: 'Clients',
      fieldset: 'fsClients',
      description: 'Un nom par ligne, dans l’ordre d’affichage. (Coller une liste séparée par des virgules marche aussi.)',
      type: 'text',
      rows: 14,
    },
    hide('hideClients', 'fsClients'),
  ],
  preview: {prepare: () => ({title: 'Infos'})},
}
