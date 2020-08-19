
export abstract class MascaraSet {

    public static date() { return $('.date').mask('00/00/0000'); }
    public static time() { return $('.time').mask('00:00:00'); }
    public static dateTime() { return $('.date_time').mask('00/00/0000 00:00:00'); }
    public static cep() { return $('.cep').mask('00000-000'); }
    public static phone() { return $('.phone').mask('0000-0000'); }
    public static phoneWithDdd() { return $('.phone_with_ddd').mask('(00) 0000-0000'); }
    public static phone_us() { return $('.phone_us').mask('(000) 000-0000'); }
    public static mixed() { return $('.mixed').mask('AAA 000-S0S'); }
    public static rg() { return $('.rg').mask('0.000.000-0', { reverse: true }); }
    public static cpf() { return $('.cpf').mask('000.000.000-00', { reverse: true }); }
    public static cnpj() { return $('.cnpj').mask('00.000.000/0000-00', { reverse: true }); }
    public static money() { return $('.money').mask('000,000,000,000,000.00', { reverse: true }); }
    public static money2() { return $('.money2').mask("#.##0,00", { reverse: true }); }
    public static ipAddressTranslation() { return $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', { 
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    })}
    public static ipAddress() { return $('.ip_address').mask('099.099.099.099'); }
    public static percent() { return $('.percent').mask('##0,00%', { reverse: true }); }
    public static clearIfNotMatch() { return $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true }); }
    public static placeholder() { return $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" }); }
    public static fallback() { return $('.fallback').mask("00r00r0000", { 
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    })}
    public static selectonfocus() { return $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true }); }
}