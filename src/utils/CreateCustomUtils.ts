export abstract class CreateCustomUtils {

    static EventListener(newLocal: string, newLocal_1: string, func: (e) => any) {
        const element = document.querySelector(newLocal);
        if (!!element)
            element
                .addEventListener(newLocal_1, (e: any) => func(e));
    }
}