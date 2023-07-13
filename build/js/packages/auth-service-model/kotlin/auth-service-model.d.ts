type Nullable<T> = T | null | undefined
export declare namespace ru.timmson.authService.model {
    function isValidLuna(number: string): boolean;
}
export declare namespace ru.timmson.authService.model {
    class User {
        constructor();
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get firstName(): Nullable<string>;
        set firstName(value: Nullable<string>);
        get lastName(): Nullable<string>;
        set lastName(value: Nullable<string>);
    }
}
export as namespace auth_service_model;