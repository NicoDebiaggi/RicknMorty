export default function CharactersLayout ({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div>
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  )
}
