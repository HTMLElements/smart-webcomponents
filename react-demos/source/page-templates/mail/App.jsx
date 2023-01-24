import React from "react";
import ReactDOM from "react-dom";
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.mailscontainer = React.createRef();
		this.viewmailcontainer = React.createRef();
		this.tree = React.createRef();
	}

	messages = {
		inbox: {
			countUnreadMessages: 1,
			menuSelectorId: 'inbox',
			favourites: 1,
			messages: [{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contemnit enim disserendi elegantiam, confuse loquitur.Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare ? Confecta res esset.Sint ista Graecorum; Duo Reges: constructio interrete.Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.`,
					name: 'Idona Stanton',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Training Announcement',
					description: `Hi Kerry Best,
						Eam tum adesse, cum dolor omnis absit; Apparet statim, quae sint officia, quae actiones. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quae similitudo in genere etiam humano apparet.`,
					name: 'Kirby Dickerson',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 7:21 AM',
					flagged: 1,
					read: 0,
				},
				{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Stoicos roga.
						Si quicquam extra virtutem habeatur in bonis.
						Recte dicis;
						Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.
						Certe non potest.
						Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.
						Idem adhuc;
						Cave putes quicquam esse verius.
						Paria sunt igitur.
						Hoc non est positum in nostra actione.`,
					name: 'Hector Gordon',
					avatar: '../../../images/entrepreneur-593358_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				}
			]
		},
		clutter: {
			countUnreadMessages: 0,
			menuSelectorId: 'clutter',
			favourites: 0,
			messages: [{
				title: 'Programmer Position - Jane Doe Application',
				description: `Hi Kerry Best,
						Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus.
						Quorum sine causa fieri nihil putandum est.
						Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.`,
				name: 'Nayda Tate',
				avatar: '../../../images/woman-3096664_960_720.jpg',
				date: '24/10/2017 6:48 AM',
				flagged: 1,
				read: 1,
			}]
		},
		drafts: {
			countUnreadMessages: 1,
			menuSelectorId: 'drafts',
			favourites: 1,
			messages: [{
				title: 'Programmer Position - Jane Doe Application',
				description: `Quocirca intellegi necesse est in ipsis rebus, quae
							discuntur et cognoscuntur, invitamenta inesse, quibus ad
							discendum cognoscendumque moveamur.
							Non pugnem cum homine, cur tantum habeat in natura boni;`,
				name: 'Nayda Tate',
				avatar: '../../../images/girl-2366438_960_720.jpg',
				date: '24/10/2017 10:14 AM',
				flagged: 0,
				read: 0,
			}]
		},
		sentItems: {
			countUnreadMessages: 0,
			menuSelectorId: 'sentItems',
			favourites: 1,
			messages: [{
					title: 'Hospitality Committee',
					description: `Solum praeterea formosum, solum liberum, solum civem, stultost; Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint.`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 20:10 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Apology marketing email',
					description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
					name: 'Rogan Espinoza',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 20:15 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Application for the post of an IT analyst',
					description: `Hello Kerry Best,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Quae cum dixisset, finem ille. Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate..
							Non pugnem cum homine, cur tantum habeat in natura boni;`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/man-4252192_960_720.jpg',
					date: '24/10/2017 20:53 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Networking Referral',
					description: `Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; Summum enim bonum exposuit vacuitatem doloris;`,
					name: 'Paloma Battle',
					avatar: '../../../images/entrepreneur-593358_960_720.jpg',
					date: '24/10/2017 21:06 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'My life in New York',
					description: `
							Sed ne, dum huic obsequor, vobis molestus sim.
							Idem iste, inquam, de voluptate quid sentit?
							Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.
							Haec quo modo conveniant, non sane intellego.
							Quia dolori non voluptas contraria est, sed doloris privatio.
							Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?`,
					name: 'Catherine Baldwin',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Holiday application',
					description: `Dear Quynn Carr,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico.`,
					name: 'Callie Weiss',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 0,
				},
			]
		},
		deletedItems: {
			countUnreadMessages: 0,
			menuSelectorId: 'deletedItems',
			favourites: 0,
			messages: [{
					title: 'Networking Referral',
					description: `Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; Summum enim bonum exposuit vacuitatem doloris;`,
					name: 'Paloma Battle',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 21:06 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Holiday application',
					description: `Dear Quynn Carr,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico.`,
					name: 'Callie Weiss',
					avatar: '../../../images/entrepreneur-593358_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Apology marketing email',
					description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
					name: 'Rogan Espinoza',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 20:15 AM',
					flagged: 0,
					read: 0,
				},
			]
		},
		archive: {
			countUnreadMessages: 0,
			menuSelectorId: 'archive',
			favourites: 0,
			messages: [{
				title: 'Apology marketing email',
				description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
				name: 'Rogan Espinoza',
				avatar: '../../../images/girl-2366438_960_720.jpg',
				date: '24/10/2017 20:15 AM',
				flagged: 0,
				read: 0,
			}, ]
		},
		junkMail: {
			countUnreadMessages: 5,
			menuSelectorId: 'junkMail',
			favourites: 1,
			messages: [{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contemnit enim disserendi elegantiam, confuse loquitur.Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare ? Confecta res esset.Sint ista Graecorum; Duo Reges: constructio interrete.Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.`,
					name: 'Idona Stanton',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Training Announcement',
					description: `Hi Kerry Best,
						Eam tum adesse, cum dolor omnis absit; Apparet statim, quae sint officia, quae actiones. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quae similitudo in genere etiam humano apparet.`,
					name: 'Kirby Dickerson',
					avatar: '../../../images/entrepreneur-593358_960_720.jpg',
					date: '24/10/2017 7:21 AM',
					flagged: 1,
					read: 0,
				},
				{
					title: 'Hospitality Committee',
					description: `Solum praeterea formosum, solum liberum, solum civem, stultost; Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint.`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 20:10 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Apology marketing email',
					description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
					name: 'Rogan Espinoza',
					avatar: '../../../images/man-4252192_960_720.jpg',
					date: '24/10/2017 20:15 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Stoicos roga.
						Si quicquam extra virtutem habeatur in bonis.
						Recte dicis;
						Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.
						Certe non potest.
						Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.
						Idem adhuc;
						Cave putes quicquam esse verius.
						Paria sunt igitur.
						Hoc non est positum in nostra actione.`,
					name: 'Hector Gordon',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Application for the post of an IT analyst',
					description: `Hello Kerry Best,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Quae cum dixisset, finem ille. Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate..
							Non pugnem cum homine, cur tantum habeat in natura boni;`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 20:53 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Networking Referral',
					description: `Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; Summum enim bonum exposuit vacuitatem doloris;`,
					name: 'Paloma Battle',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 21:06 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'My life in New York',
					description: `
							Sed ne, dum huic obsequor, vobis molestus sim.
							Idem iste, inquam, de voluptate quid sentit?
							Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.
							Haec quo modo conveniant, non sane intellego.
							Quia dolori non voluptas contraria est, sed doloris privatio.
							Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?`,
					name: 'Catherine Baldwin',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Holiday application',
					description: `Dear Quynn Carr,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico.`,
					name: 'Callie Weiss',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 1,
				},
			]
		},
		personnel: {
			countUnreadMessages: 0,
			menuSelectorId: 'personnel',
			favourites: 0,
			messages: [{
				title: 'Programmer Position - Jane Doe Application',
				description: `Hi Kerry Best,
						Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus.
						Quorum sine causa fieri nihil putandum est.
						Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.`,
				name: 'Nayda Tate',
				avatar: '../../../images/girl-2771001_960_720.jpg',
				date: '24/10/2017 6:48 AM',
				flagged: 1,
				read: 1,
			}]
		},
		salesReports: {
			countUnreadMessages: 1,
			menuSelectorId: 'salesReports',
			favourites: 1,
			messages: [{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contemnit enim disserendi elegantiam, confuse loquitur.Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare ? Confecta res esset.Sint ista Graecorum; Duo Reges: constructio interrete.Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.`,
					name: 'Idona Stanton',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Training Announcement',
					description: `Hi Kerry Best,
						Eam tum adesse, cum dolor omnis absit; Apparet statim, quae sint officia, quae actiones. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quae similitudo in genere etiam humano apparet.`,
					name: 'Kirby Dickerson',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 7:21 AM',
					flagged: 1,
					read: 0,
				},
				{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Stoicos roga.
						Si quicquam extra virtutem habeatur in bonis.
						Recte dicis;
						Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.
						Certe non potest.
						Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.
						Idem adhuc;
						Cave putes quicquam esse verius.
						Paria sunt igitur.
						Hoc non est positum in nostra actione.`,
					name: 'Hector Gordon',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				}
			]
		},
		marketingReports: {
			countUnreadMessages: 0,
			menuSelectorId: 'marketingReports',
			favourites: 0,
			messages: [{
				title: 'Apology marketing email',
				description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
				name: 'Rogan Espinoza',
				avatar: '../../../images/woman-3096664_960_720.jpg',
				date: '24/10/2017 20:15 AM',
				flagged: 0,
				read: 0,
			}, ]
		},
		trash: {
			countUnreadMessages: 5,
			menuSelectorId: 'trash',
			favourites: 1,
			messages: [{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contemnit enim disserendi elegantiam, confuse loquitur.Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare ? Confecta res esset.Sint ista Graecorum; Duo Reges: constructio interrete.Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius.`,
					name: 'Idona Stanton',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Training Announcement',
					description: `Hi Kerry Best,
						Eam tum adesse, cum dolor omnis absit; Apparet statim, quae sint officia, quae actiones. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quae similitudo in genere etiam humano apparet.`,
					name: 'Kirby Dickerson',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 7:21 AM',
					flagged: 1,
					read: 0,
				},
				{
					title: 'Hospitality Committee',
					description: `Solum praeterea formosum, solum liberum, solum civem, stultost; Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint.`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/entrepreneur-593358_960_720.jpg',
					date: '24/10/2017 20:10 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Apology marketing email',
					description: `Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est?
							Regards,
							Alana Mccray`,
					name: 'Rogan Espinoza',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 20:15 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Service appointment confirmation',
					description: `Hi Kerry Best,
						Stoicos roga.
						Si quicquam extra virtutem habeatur in bonis.
						Recte dicis;
						Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.
						Certe non potest.
						Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.
						Idem adhuc;
						Cave putes quicquam esse verius.
						Paria sunt igitur.
						Hoc non est positum in nostra actione.`,
					name: 'Hector Gordon',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 4:48 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Application for the post of an IT analyst',
					description: `Hello Kerry Best,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Quae cum dixisset, finem ille. Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate..
							Non pugnem cum homine, cur tantum habeat in natura boni;`,
					name: 'Lacota Lloyd',
					avatar: '../../../images/girl-2366438_960_720.jpg',
					date: '24/10/2017 20:53 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'Networking Referral',
					description: `Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; Summum enim bonum exposuit vacuitatem doloris;`,
					name: 'Paloma Battle',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 21:06 AM',
					flagged: 0,
					read: 0,
				},
				{
					title: 'My life in New York',
					description: `
							Sed ne, dum huic obsequor, vobis molestus sim.
							Idem iste, inquam, de voluptate quid sentit?
							Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.
							Haec quo modo conveniant, non sane intellego.
							Quia dolori non voluptas contraria est, sed doloris privatio.
							Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?`,
					name: 'Catherine Baldwin',
					avatar: '../../../images/woman-3096664_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 1,
				},
				{
					title: 'Holiday application',
					description: `Dear Quynn Carr,
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico.`,
					name: 'Callie Weiss',
					avatar: '../../../images/girl-2771001_960_720.jpg',
					date: '24/10/2017 21:53 AM',
					flagged: 0,
					read: 1,
				},
			]
		},
		outbox: {
			countUnreadMessages: 0,
			menuSelectorId: 'outbox',
			favourites: 0,
			messages: [{
				title: 'Programmer Position - Jane Doe Application',
				description: `Hi Kerry Best,
						Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus.
						Quorum sine causa fieri nihil putandum est.
						Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.`,
				name: 'Nayda Tate',
				avatar: '../../../images/woman-3096664_960_720.jpg',
				date: '24/10/2017 6:48 AM',
				flagged: 1,
				read: 1,
			}]
		}
	};
	
	 handleChange(e) {
		this.closeOpenedMail();

		let treeItemSelected = this.tree.current.nativeElement.querySelector('smart-tree-item[selected]');

		if (treeItemSelected) {
			this.renderMessages(treeItemSelected.id); //Render by category name
		}
	}

	 updateUnreadMessagesCount() {
		Object.values(this.messages).map((msg) => {
			const unreadMessagesContainer = document.getElementById(msg.menuSelectorId).querySelector('.unread-messages');

			if (unreadMessagesContainer) {
				unreadMessagesContainer.innerText = msg.countUnreadMessages;
			} 
			else {
				let unreadMessages = document.createElement('span');

				unreadMessages.classList.add('unread-messages');
				unreadMessages.innerText = msg.countUnreadMessages;

				document.getElementById(msg.menuSelectorId).appendChild(unreadMessages);
			}
		});
	}

	renderMessages(messageCat) {
		let mailsContainer = document.createElement('div');

		Object.entries(this.messages[messageCat].messages).map((a, i) => {
			let m = this.messages[messageCat].messages[i];
			let eachMailContainer = document.createElement('div');

			eachMailContainer.classList.add('mail-row');

			if (m.read === 0) {
				eachMailContainer.classList.add('unread');
			}

			eachMailContainer.addEventListener('click', () => this.openMail(eachMailContainer, this.messages[messageCat], i));

			let mailName = document.createElement('div');

			mailName.classList.add('name');
			mailName.innerText = m.name;
			eachMailContainer.appendChild(mailName);

			let mailTitle = document.createElement('div');

			mailTitle.classList.add('title');
			mailTitle.innerText = m.title;
			eachMailContainer.appendChild(mailTitle);

			let mailDate = document.createElement('div');
			let mailHour = m.date.split(' ');

			mailHour = mailHour[1] + ' ' + mailHour[2];
			mailDate.classList.add('date');
			mailDate.innerText = mailHour;
			eachMailContainer.appendChild(mailDate);

			let mailDesc = document.createElement('div');

			mailDesc.classList.add('description');
			mailDesc.innerText = m.description.substring(0, 40) + '...';
			eachMailContainer.appendChild(mailDesc);
			mailsContainer.appendChild(eachMailContainer);
		});

		const mailContainer = this.mailscontainer.current;

		mailContainer.innerHTML = '';
		mailContainer.appendChild(mailsContainer);
	};

	openMail(mailContainer, m, i) {
		if (m.messages[i].read === 0) {
			m.messages[i].read = 1;
			this.markMailAsRead(mailContainer, m);
		}

		m = m.messages[i];

		let viewMailContainer = this.viewmailcontainer.current;

		viewMailContainer.innerHTML = '';
		let eachMailContainer = document.createElement('div');
		let mailName = document.createElement('div');
		mailName.classList.add('name');
		mailName.innerText = m.name;
		eachMailContainer.appendChild(mailName);
		let mailTitle = document.createElement('div');
		mailTitle.classList.add('title');
		mailTitle.innerText = m.title;
		eachMailContainer.appendChild(mailTitle);
		let mailDate = document.createElement('div');
		mailDate.classList.add('date');
		mailDate.innerText = m.date;
		eachMailContainer.appendChild(mailDate);
		let mailDesc = document.createElement('div');
		mailDesc.classList.add('description');
		mailDesc.innerText = m.description;
		eachMailContainer.appendChild(mailDesc);
		viewMailContainer.appendChild(eachMailContainer);
	}

	closeOpenedMail() {
		let viewMailContainer = this.viewmailcontainer.current;

		viewMailContainer.innerHTML = '';
	}

	markMailAsRead(mailContainer, m) {
		m.countUnreadMessages -= 1;
		mailContainer.classList.remove('unread');
		this.updateUnreadMessagesCount();
	}

	init() {
		this.updateUnreadMessagesCount();
	}

	componentDidMount() {
this.init();
	}

	render() {
		return (
			<div>
			    <header>
			        <div className="header-container">
			            <div className="apps-icon"> <i className="material-icons">
			
			                    apps
			
			                </i>
			            </div>
			            <div className="header-title-container"> <span className="header-title">
			
			                    Webmail
			
			                </span>
			            </div>
			            <div className="header-icon-container"> <i className="material-icons">
			
			                    search
			
			                </i>
 <i className="material-icons">
			
			                    notifications
			
			                </i>
 <i className="material-icons">
			
			                    language
			
			                </i>
			            </div>
			        </div>
			    </header>
			    <section className="page-container">
			        <div className="smart-grid-layout centered">
			            <div className="row">
			                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			                    <Tree ref={this.tree} onChange={this.handleChange.bind(this)} id="tree">
			                        <TreeItemsGroup>Favorites</TreeItemsGroup>
			                        <TreeItemsGroup>Andrew Fuller
			                            <TreeItem id="inbox">Inbox</TreeItem>
			                            <TreeItem id="clutter">Clutter</TreeItem>
			                            <TreeItem id="drafts">Drafts</TreeItem>
			                            <TreeItem id="sentItems">Sent Items</TreeItem>
			                            <TreeItem id="deletedItems">Deleted Items</TreeItem>
			                            <TreeItem id="archive">Archive</TreeItem>
			                            <TreeItem id="junkMail">Junk Mail</TreeItem>
			                            <TreeItem id="personnel">Personnel</TreeItem>
			                            <TreeItem id="salesReports">Sales Reports</TreeItem>
			                            <TreeItem id="marketingReports">Marketing Reports</TreeItem>
			                            <TreeItem id="trash">Trash</TreeItem>
			                            <TreeItem id="outbox">Outbox</TreeItem>
			                        </TreeItemsGroup>
			                    </Tree>
			                </div>
			                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			                    <div ref={this.mailscontainer} className="mails-container"></div>
			                </div>
			                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                    <div ref={this.viewmailcontainer} className="view-mail-container"></div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
