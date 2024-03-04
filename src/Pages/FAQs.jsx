import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function FAQs() {
  function CreateAccordian({ title, desc }) {
    return (
      <AccordionItem border={'none'}>
        <h2>
          <AccordionButton mt={3}>
            <AccordionIcon />
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <Text fontWeight={700} fontSize={'1rem'}>
                {title}
              </Text>
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontWeight={700} fontSize={'.9rem'}>
            {desc}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    );
  }

  return (
    <Box p={{ base: 2, md: 10 }}>
      <Box width={{ base: '100%', md: '80%' }} margin="auto">
        <Heading fontWeight={700} fontSize={'1.5rem'}>
          FAQs
        </Heading>
        <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
          Frequently Asked Questions:
        </Text>
        <Text fontWeight={600} fontSize={'.7rem'} mt={2}>
          Check out this section to get answers for all the frequently asked
          questions.
        </Text>

        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Registration
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title=" How do I register?"
              desc='You can register by clicking on the "Sign In" section located
                  at the top right corner on the home page. Please provide the
                  required information in the form that appears and click on
                  submit. We will send a one-time password (OTP) to verify your
                  mobile number. Post verification, you can start shopping on
                  JioMart.'
            />

            <CreateAccordian
              title="   Do I need to register before shopping on JioMart?"
              desc="   Yes, you do need to register before shopping with us. However,
              you can browse the website without registration. You are
              required to login or register while you checkout."
            />
            <CreateAccordian
              title=" Can I register multiple times using the same phone
              number/email ID?"
              desc="Each email ID/login ID and mobile number can only be
              associated with one customer account."
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Product / Price / Promotion
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="How do I look for a particular Product?"
              desc="You can search for a product by navigating through the category pages or by using search tab on the top of every page."
            />

            <CreateAccordian
              title="How will you ensure the freshness of products?"
              desc="We ensure that all our products are hygienically and carefully handled and maintain them in the correct temperature & packaging."
            />
            <CreateAccordian
              title="How can I check if the product I am ordering is in stock?"
              desc="You can prepare your cart and select the address you want the order to be delivered at. The availability of the product will be dependent on the selected address. Product without availability will be shown as ‘Out of stock’. You may remove them or add similar products as per your convenience."
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Ordering
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="How do I know if I placed my order correctly?"
              desc="Upon the successful completion of your order, an order confirmation e-mail and SMS containing your order details will be sent to your registered email ID and phone number."
            />

            <CreateAccordian
              title="Can I call and place an order?"
              desc="No, currently this service is not available."
            />
            <CreateAccordian
              title="How are the fruits and vegetables weighed?"
              desc="All fruits and vegetables vary in size and weight. You can choose any size/weight available on the website. While you shop, we will show an estimated weight and price. At the time of processing, we pack the closest size/weight and charge you for the actual weight of each item. E.g. If you order 1 kg of apples, we will try to pack exactly 1 kg or the weight closest to 1 kg. If the actual weight is 987 gm, we will bill you for 987 gm and not 1 kg."
            />
            <CreateAccordian
              title="How do I make changes to my order?"
              desc="Currently, there is no provision to modify the order once it is placed. You may cancel the order until it is shipped. You may request for a return of the ordered product as per the return policy."
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Payment
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="What are the various modes of payment I can use for shopping?"
              desc="You can pay for your order using the following modes of payment:

             - UPI
             - Credit Card / Debit Card
             -  Netbanking
             -  e-Wallets
             -  Meal Cards
             -  Pay Later
             -  Cash on Delivery
          "
            />

            <CreateAccordian
              title="Can I pay online during the delivery of the product?"
              desc="You can pay by scanning the QR available on the invoice using any UPI app at the time of delivery. Please check with the delivery executive to assist you."
            />
            <CreateAccordian
              title="I have placed an order with Cash on Delivery option. Can I change the payment method now?"
              desc="Payment method cannot be changed once the order is placed."
            />
            <CreateAccordian
              title="How much time will it take to get the refund of a cancelled/returned order?"
              desc="Refund against a cancelled or return product may take up to 7 working days depending on the payment instrument used to place the order."
            />
            <CreateAccordian
              title="How will I get the refund against an order which placed with Cash on Delivery?"
              desc="Refund against orders delivered with Cash on delivery will credited in your JioMart wallet which can be utilized for future orders."
            />
            <CreateAccordian
              title="What are RBI guidelines?"
              desc="As per RBI guidelines, effective 1st October 2022, merchants can no longer save your credit or debit card details. Instead, the card will be stored at merchant, payment gateway and aggregators in the form of tokens."
            />
            <CreateAccordian
              title="How do I provide my consent to save the card?"
              desc="When you add a new card, you will see a consent screen requesting you to tap on ‘Secure & Pay’ button. Simply select the tap on the button and continue with your payment on that card. Your consent will be successfully captured once the payment is complete."
            />
            <CreateAccordian
              title="Do I need to provide consent separately for each card?"
              desc="Yes, per the RBI guidelines, you need to provide consent to save each card separately. You can do the same while making your payment on JioMart."
            />
            <CreateAccordian
              title="Do I need to pay any charges for saving my card?"
              desc="No, there are no charges for tokenizing and saving your cards."
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Delivery
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="How will I know if JioMart delivers to my area?"
              desc="You can check the serviceability of your area while selecting your pin code when you place your order."
            />

            <CreateAccordian
              title="How can I check for an expected date of delivery of an order I placed?"
              desc="You can check for an estimated date of delivery on the product description page by entering your pin code. Date of delivery may vary from product to product and is also dependent on the pin code of the delivery address. We try our best to delivery your orders as early as possible."
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Fraud prevention and awareness
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="What are the ways in which fraudsters may approach customers?"
              desc="It has come to the notice of JioMart that, some fraudsters are approaching customers:

             - with promotional Offers from JioMart;
             - through fake email IDs as well as fake domain names/website links which may appear confusingly similar or identical with JioMart and its Group Companies
             - through Social media Apps such as Whatsapp / Facebook by including the trademark/logo of JioMart and/or the logo ‘B’ as part of their profile pic and pushing fake offers to the innocent public, by luring them with false promises.
          "
            />

            <CreateAccordian
              title="How can customers safeguard themselves from fraudsters?"
              desc="Please exercise caution against fraudsters who may use fake email IDs, fake profiles on Social media (Whatsapp, Facebook etc.), domains, websites, telephones and advertisements in newspapers/magazines, etc. by impersonating themselves to be from JioMart and/or its Group Companies and claim to be offer promotional offers, collect customer account details, ask for advance money to process winners, etc."
            />
            <CreateAccordian
              title="What should customers do in case they have become victim to any fraud?"
              desc="General public and prospective customers are advised to immediately report any suspicious incident to the concerned authorities and to us. Please note that any person dealing with such fraudsters will be dealing at his/her own risk and responsibility. JioMart and/or any of its Group Company will not be responsible for any loss suffered or otherwise in this respect.
              "
            />
          </Accordion>
        </Box>
        <Box my={5}>
          <Text fontWeight={700} fontSize={'1.3rem'} mt={2}>
            Gift Voucher
          </Text>
          <Accordion allowToggle border={'none'}>
            <CreateAccordian
              title="What is the validity of JioMart Gift Voucher?"
              desc="JioMart Gift voucher is valid only for a period of 12 months from the date of receipt."
            />

            <CreateAccordian
              title="How can I redeem my JioMart Gift Voucher?"
              desc="JioMart Gift voucher can be used to purchase eligible items on Jiomart.com. To do so, select the JioMart Gift Voucher option on the payment method selection page. You can also combine other available payment modes with your JioMart Gift Voucher amount to complete a purchase."
            />
            <CreateAccordian
              title="What products can I purchase using a JioMart Gift Voucher?"
              desc="All eligible products sold on Jiomart.com can be purchased using a JioMart Gift Voucher. JioMart Gift Voucher cannot be used to purchase Third Party products, Gold Coins, Silver Coins and Fine Jewellery."
            />
            <CreateAccordian
              title="Can I partially redeem the JioMart Gift Voucher?"
              desc="JioMart Gift Voucher cannot be redeemed in parts and needs to be redeemed for full value."
            />
            <CreateAccordian
              title="Can I redeem multiple JioMart Gift Voucher against a single order?"
              desc="Multiple JioMart Gift Vouchers cannot be redeemed against a single order. For an order, only one voucher can be redeemed."
            />
            <CreateAccordian
              title="Who do I reach out in case of any issues faced while redeeming a gift voucher?"
              desc="In case of any issues faced while redeeming the JioMart Gift Voucher, you can reach to customer service desk at: 1800 890 1222 or cs@jiomart.com."
            />
            <CreateAccordian
              title="Can I exchange JioMart Gift Voucher in exchange for cash in bank or JioMart wallet?"
              desc="No, JioMart Gift Voucher cannot be exchanged for cash in bank or in JioMart wallet."
            />
            <CreateAccordian
              title="What happens in case of failure to use the JioMart Gift Voucher on or before the validity period?"
              desc="No extension of the validity period nor refund of the value of JioMart Gift Voucher will be given in case of failure to use the JioMart Gift voucher on or before the validity period."
            />
            <CreateAccordian
              title="Can I cancel/return/transfer a JioMart Gift Voucher?"
              desc="JioMart Gift Voucher once purchased cannot be cancelled, returned or transferred."
            />
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

export default FAQs;
