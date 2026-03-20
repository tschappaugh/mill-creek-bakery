import { ContentHeader } from '@tschappaugh/mill-creek-ui'

export default function PrivacyPage() {
  return (
    <main className="bg-mill-background pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <ContentHeader
          level="h1"
          heading="Privacy Policy"
          body="Mill Creek Bakery is a technology demonstration and portfolio project showcasing a headless WordPress and Next.js implementation. It is not a commercial product and does not collect, store, or process personal data for commercial purposes."
          className="mb-12"
        />
        <div className="max-w-[720px] mx-auto font-sans text-base text-mill-text-primary space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">What Data We Collect</h2>
            <p className="text-mill-text-secondary leading-body">
              This demonstration site does not collect personal information from visitors. There is no user registration, contact forms, or analytics tracking on this site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">Newsletter Signup</h2>
            <p className="text-mill-text-secondary leading-body">
              This site links to an external HubSpot-hosted newsletter signup form. If you choose to submit your information through that form, your data is handled by HubSpot in accordance with their privacy policy. Mill Creek Bakery does not store or process any information you submit there.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">Cookies</h2>
            <p className="text-mill-text-secondary leading-body">
              This site does not set cookies directly. The WordPress backend powering this site's content runs locally and is not accessible to visitors. Any cookies set by third-party services linked from this site are governed by their respective privacy policies.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">Embedded Content</h2>
            <p className="text-mill-text-secondary leading-body">
              Pages on this site may include embedded content such as images and external links. External websites linked from this site have their own privacy policies and data practices.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">Contact</h2>
            <p className="text-mill-text-secondary leading-body">
              This is a demonstration project created by Tony Schappaugh as part of a professional portfolio. For questions about this site please visit <a href="https://tonyschappaugh.com" className="text-mill-brand-dark underline hover:text-mill-brand-darker">tonyschappaugh.com</a>.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal text-mill-text-primary mb-3">Changes to This Policy</h2>
            <p className="text-mill-text-secondary leading-body">
              As this is a demonstration site, this privacy policy is not expected to change. Any updates will be posted on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
