interface Props {
    children: React.ReactNode;
}

export const ScreenWraper = ({ children }: Props) => {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            {children}
        </div>
    );
};
