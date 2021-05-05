import { TabTitle, TabContent, TopInfo } from "./component";
export default function Profile() {
  return (
    <main className="profile" id="main">
      <section>
        <TopInfo />
        <div className="container">
          <div className="tab">
            <TabTitle />
            <TabContent />
          </div>
        </div>
      </section>
    </main>
  );
}
