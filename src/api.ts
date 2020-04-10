export interface WebApplication {
    nav(): NavComponent;
    board(): BoardComponent;
}
export interface CardComponent {
    onEdit(web: (web: CardComponent) => void);
    name: string;
    desc: string;
    links: string;
    id: string;
}
export interface PositionComponent {
    card(): CardComponent;
    usePosition(arg0: { x: number; y: number; });
}
export interface NavComponent {
    onAdd: () => void;
    onClick: (id: any) => void;
    addCard(name: string, id: string): void;
    clear();
}
export interface BoardComponent {
    positionFor(id: string): PositionComponent;
}