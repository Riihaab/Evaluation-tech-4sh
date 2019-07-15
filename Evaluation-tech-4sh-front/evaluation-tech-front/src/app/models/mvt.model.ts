//Model definition 
class Mvt {
    _id: string;
    type: string;
    description: string;
    date_mvt: Date;
    date_creationmvt: Date;
    magasin_origine: string;
    code_magasinorigine: string;
    magasin_destination: string;
    code_magasindestination: string;
    status_douanier: string;
    type_reference: string;
    reference: string;
    type_docdouanier: string;
    ref_docdouanier: string;
    quant: number;
    quant_tot: number;
    poids: number;
    poids_tot: number;
}
export default Mvt;
