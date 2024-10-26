export default function CharactersLayout ({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  console.log(modal)
  return (
    <div>
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  )
}
